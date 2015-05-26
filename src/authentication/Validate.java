package authentication;

import java.sql.*;

/**
 * <code>Validate</code> class validates login credentials.
 * 
 * @author farah
 * @since 1'st May 2015
 */
public class Validate {
	/**
	 * This method accepts login credentials and send query request, if result
	 * is null so user is not valid else user will be logged in.
	 * 
	 * Method will be called from {@link Login}.
	 * 
	 * @param email
	 * @param password
	 * @return boolean value true/false as result of query
	 */
	public static boolean checkUser(String email, String password) {
		boolean st = false;
		try {
			System.out.println(email + " .... " + password);
			
			// Non db user only for testing purpose.
			if (email.equals("admin@admin") && password.equals("admin"))
				return true;

			// loading drivers for mysql
			Class.forName("com.mysql.jdbc.Driver");

			// creating connection with the database
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/MRoomPlannerDB", "root",
					"pramati123");
			
			// Preapare statement
			PreparedStatement ps = con
					.prepareStatement("select * from User where email=? and password=?");
			
			// Set values in query
			ps.setString(1, email);
			ps.setString(2, password);
			
			// Execute query
			ResultSet rs = ps.executeQuery();
			
			// Check result
			st = rs.next();

			System.out.println(st);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		// Return result true/false
		return st;
	}
}