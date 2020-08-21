package java_easy;

public class TargetArrayGivenOrder_Solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] nums = {0,1,2,3,4};
		int[] index = {0,1,2,2,1};
		
		int[] result = createTargetArray(nums, index);
		for(int i : result) {
			System.out.print(i);
		}
	}
	
	public static int[] createTargetArray(int[] nums, int[] index) {
        int[] output = new int[index.length];
        for(int i = 0; i < index.length; i++){
            if(index[i] < i) {
                int j = output.length - 1;
                while(j > index[i]) {
                	output[j] = output[j - 1];
                	j--;
                }
            }
            output[index[i]] = nums[i];
        }
        return output;
    }
}
