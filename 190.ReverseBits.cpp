#include <stdio.h>
#include <iostream>

class Solution
{
public:
	uint32_t reverseBits(uint32_t n)
	{
		uint32_t res = 0;
		// for (int i = 31; i >= 0; i--)
		// {
		// 	res += ((n & 1) << i);
		// 	n >>= 1;
		// }

		for (int i = 0; i < 32; i++)
		{
			res <<= 1;
			res += (n & 1);
			// res = (res << 1) + (n & 1);
			n >>= 1;
		}
		return res;
	}
};

int main()
{
	return 0;
}