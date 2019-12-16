<script>
   import java.util.Scanner;
public class PeopleWealth {
 
 
	public static void main(String[] args){
		Scanner scan = new Scanner(System.in);
 
		//Decide the number of friends
		System.out.print("Enter how many people from their wealth: ");
		int numOfWealth = Integer.parseInt(scan.nextLine());
 
		//Create a string array to store the names of your friends
		String arrayOfWealth[] = new String[numOfWealth];
		for (int i = 0; i < arrayOfWealth.length; i++) {
			System.out.print("Enter the amount of wealth " + (i+1) + " : ");
		        arrayOfWealth[i] = scan.nextLine();
		}
		    
		//Now show your friend's name one by one
		for (int i = 0; i < arrayOfWealth.length; i++) {
			System.out.print("My Wealth " + (i+1) + " : ");
		        System.out.print(arrayOfWealth[i] + "\n");
		}
		  
 
		    
 
	}
 
}
   
   
   
   
   
   
   
   
   
</script>
