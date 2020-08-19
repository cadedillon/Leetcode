package java_easy;

public class SmallerNumbersThanCurrent_Solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] test_case = {8,1,2,2,3};
		int[] out = smallerNumbersThanCurrent(test_case);
		System.out.print("[");
		for(int i : out) {
			System.out.print(i);
		}
		System.out.print("]");
	}
	
	public static int[] smallerNumbersThanCurrent(int[] nums) {
        int counter = 0;
        int[] out = new int[nums.length];
        
        for(int i = 0; i < nums.length; i++){
            for(int j = 0; j < nums.length; j++){
                if(nums[i] > nums[j]){
                    counter++;
                }
            }
            out[i] = counter;
            counter = 0;
        }
        return out;
    }

}
