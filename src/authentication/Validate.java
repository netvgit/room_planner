package authentication;
import java.sql.*;

public class Validate
 {
     public static boolean checkUser(String email,String pass) 
     {
      boolean st =false;
      try{
    	  System.out.println(email +" .... "+pass);
    	  if(email.equals("admin@admin") && pass.equals("admin"))
    		  return true;

	 //loading drivers for mysql
         Class.forName("com.mysql.jdbc.Driver");

 	 //creating connection with the database 
         Connection con=DriverManager.getConnection
                        ("jdbc:mysql://localhost:3306/MRoomPlannerDB","root","pramati123");
         PreparedStatement ps =con.prepareStatement
                             ("select * from User where email=? and password=?");
         ps.setString(1, email);
         ps.setString(2, pass);
         ResultSet rs =ps.executeQuery();
         st = rs.next();
         
         System.out.println(st);
      }catch(Exception e)
      {
          e.printStackTrace();
      }
         return st;                 
  }   
}