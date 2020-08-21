package java_easy;

public class XOR_Array_Solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int n = 5;
		int start = 0;
		
		int result = xorOperation(n, start);
		System.out.print(result);

	}
	public static int xorOperation(int n, int start) {
        int output = 0;
        int[] nums = new int[n];
        for(int i = 0; i < nums.length; i++) {
        	nums[i] = start + (2 * i);
        	output = output ^ nums[i];
        }
        
       
        return output;
    }
}
