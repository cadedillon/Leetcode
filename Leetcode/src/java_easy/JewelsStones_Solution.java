package java_easy;

public class JewelsStones_Solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		String arg1 = "aA";
		String arg2 = "aAAbbbb";
		System.out.print(numJewelsInStones(arg1, arg2));
	}
	
	public static int numJewelsInStones(String J, String S) {
        int output = 0;
        for(int i = 0; i < S.length(); i++) {
        	char c = S.charAt(i);
        	
        	if(J.indexOf(c) > -1) {
        		output++;
        	}
        }
        return output;
    }

}
