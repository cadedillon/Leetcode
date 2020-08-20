package java_easy;

public class DecompressList_Solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] test = {1,1,2,3};
		int[] result = decompressRLElist(test);
		
		for(int i : result) {
			System.out.print(i);
		}
		

	}
	
	public static int[] decompressRLElist(int[] nums) {
        int arr_length = 0;
        for(int i = 0; i < nums.length - 1; i += 2) {
        	arr_length += nums[i];
        }
        int[] output = new int[arr_length];
        int index = 0;
        for(int j = 0; j <= nums.length - 2; j += 2) {
        	for(int k = 0; k < nums[j]; k++) {
        		if(output[index] == 0) {
        			output[index] = nums[j + 1];
        		}
        		index++;
        	}
        }
        
        return output;
    }

}
