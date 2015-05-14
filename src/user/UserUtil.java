package user;
import java.sql.*;

public class UserUtil {

	public static boolean createUser(String first_name, String last_name,
			String email, String password) {
	      boolean result =false;
	      try{
	    	  System.out.println(first_name+"..."+last_name+"..."+email +" .... "+password);
	    	 
		      //loading drivers for mysql
	          Class.forName("com.mysql.jdbc.Driver");

 	 	      //creating connection with the database 
	          Connection con=DriverManager.getConnection
	                        ("jdbc:mysql://localhost:3306/MRoomPlannerDB","root","pramati123");
	          
	          Statement st = con.createStatement();
	       
	          int i = st.executeUpdate("insert into User(`email`,`password`,`first_name`,`last_name`,`contact_numbers`,`role`) values ('" + email + "','" + password + "','" + first_name + "','" + last_name + "','null','3')");
	         
	          if (i > 0)
	        	 result = true;
	         
	          System.out.println(result);
	      }catch(Exception e)
	      {
	          e.printStackTrace();
	      }
	         return result;                 
	  }

}
