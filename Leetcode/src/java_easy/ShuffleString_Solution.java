package java_easy;

public class ShuffleString_Solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String s = "codeleet";
		int[] indices = {4,5,6,7,0,2,1,3};
		String out = restoreString(s, indices);
		System.out.print(out);
	}
	
	public static String restoreString(String s, int[] indices) {
        char[] output = new char[indices.length];
        char[] input = s.toCharArray();
        
        for(int i = 0; i < indices.length; i++) {
        	int index = indices[i];
        	output[index] = input[i];
        }
        
        String out = new String(output);
        return out;
    }

}
