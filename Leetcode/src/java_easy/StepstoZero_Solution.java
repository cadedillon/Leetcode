package java_easy;

public class StepstoZero_Solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int test_case = 14;
		System.out.print(numberOfSteps(test_case));

	}
	
	public static int numberOfSteps (int num) {
        int output = 0;
        while(num > 0) {
        	if(num % 2 == 0) {
        		num = num / 2;
        	}
        	else {
        		num -= 1;
        	}
        	
        	output++;
        }
        
        return output;
    }

}
