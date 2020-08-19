package java_easy;

public class NumGoodPairs_Solution {

	public static void main(String[] args) {
		int[] nums = {1,2,3,1,1,3};
		int method_call = numIdenticalPairs(nums);
		System.out.print(method_call);

	}
	
	public static int numIdenticalPairs(int[] nums) {
        int output = 0;
        for(int i = 0; i < nums.length; i++){
            for(int j = i + 1; j < nums.length; j++){
                if(nums[i] == nums[j]){
                    output++;
                }
            }
        }
        
        return output;
    }

}