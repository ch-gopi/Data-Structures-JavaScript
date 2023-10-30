class Solution {
    public int maxSubArray(int[] nums) {
        int presum=0;
        int maxsum=Integer.MIN_VALUE;
        for(int i=0;i<nums.length;i++)
        {
            presum+=nums[i];
            if(maxsum<presum)
            maxsum=presum;
            if(presum<0)
            presum=0;
        
    }
    return maxsum;
}};