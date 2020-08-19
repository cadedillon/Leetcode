package java_easy;

public class DefangingIP_Solution {

	public static void main(String[] args) {
		String test_case = "1.1.1.1";
		
		System.out.print(defangIPaddr(test_case));

	}
	
	public static String defangIPaddr(String address) {
		String output = "";
		char[] address_arr = address.toCharArray();
		for(int i = 0; i < address_arr.length; i++) {
			if(address_arr[i] == '.') {
				output += "[.]";
			}
			else {
				output += address_arr[i];
			}
		}
        return output;	
    	}	
	

}
