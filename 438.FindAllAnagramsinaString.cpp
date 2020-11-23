#include <stdio.h>
#include <iostream>

class Solution
{
public:
	vector<int> findAnagrams(string s, string p)
	{
		vector<int> need(26), window(26), res;
		if (p.size() > s.size())
			return res;

		for (char c : p)
		{
			need[c - 'a']++;
		}

		//for (int i = 0; i < s.size(); i++) {
		//    window[s[i] - 'a']++;
		//    if (i >= p.size()) window[s[i - p.size()] - 'a']--;
		//    if (need == window) res.push_back(i - p.size() + 1);
		//}

		int left = 0, right = 0;
		while (right < s.size())
		{
			window[s[right] - 'a']++;
			if (right >= p.size())
			{
				window[s[left] - 'a']--;
				left++;
			}
			if (need == window)
			{
				res.push_back(left);
			}
			right++;
		}
		return res;
	}
};

int main()
{
	return 0;
}