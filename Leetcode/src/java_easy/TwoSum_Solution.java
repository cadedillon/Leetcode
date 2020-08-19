package java_easy;

public class TwoSum_Solution {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arg1 = {1,3,4,2};
		int arg2 = 6;
		int[] out = twoSum(arg1, arg2); 
		System.out.print(out[0]);
		System.out.print(out[1]);
	}
	
	public static int[] twoSum(int[] nums, int target) {
        int[] output = new int[2];
        Boolean solution = false;
        for(int i = 0; i < nums.length; i++) {
        	for(int j = 1; j < nums.length; j++) {
        		if(nums[i] + nums[j] == target && i != j) {
        			output[0] = i;
        			output[1] = j;
        			solution = true;
        		}
        		}
        	if(solution == true) {
    			break;
        	}
        }
        
        return output;
    }
	
}
