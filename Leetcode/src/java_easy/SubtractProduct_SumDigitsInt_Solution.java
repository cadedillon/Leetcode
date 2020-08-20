package java_easy;

public class SubtractProduct_SumDigitsInt_Solution {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int input = 705;
		System.out.print(subtractProductAndSum(input));

	}
	
	public static int subtractProductAndSum(int n) {
        int sum_digit = 0;
        int prod_digit = 0;
        int n2 = n;
        while(n > 0) {
        	int temp = n % 10;
        	sum_digit += temp;
        	n = n / 10;
        }
        
        while(n2 > 0) {
        	int temp = n2 % 10;
        	if(temp == 0) {
        		prod_digit = 0;
        		break;
        	}
        	else if(prod_digit < 1) {
        		prod_digit += temp;
        	}
        	else {
        		prod_digit = prod_digit * temp;
        	}
        	n2 = n2 / 10;
        }
        
        return prod_digit - sum_digit;
    }

}
