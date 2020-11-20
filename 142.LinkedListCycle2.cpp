#include <stdio.h>
#include <iostream>

// Definition for singly-linked list.
struct ListNode
{
	int val;
	ListNode *next;
	ListNode(int x) : val(x), next(NULL) {}
};

class Solution
{
public:
	ListNode *detectCycle(ListNode *head)
	{
		if (!head || !head->next)
		{
			return NULL;
		}

		ListNode *fast = head, *slow = head;
		//找到相遇点
		while (fast && fast->next)
		{
			fast = fast->next->next;
			slow = slow->next;
			if (fast == slow)
			{
				break;
			}
		}
		// 没有相遇点，也就是没有环，直接返回即可
		if (fast != slow)
		{
			return NULL;
		}
		//让慢指针回到开头，快慢指针重新同步前进，两指针就会在环的起点相遇
		slow = head;
		while (fast != slow)
		{
			fast = fast->next;
			slow = slow->next;
		}
		return fast;
	}
};

int main()
{
	return 0;
}