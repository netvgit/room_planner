package user;

import java.sql.*;

/**
 * <code>UserUtil</code> class will create user in DB and return result.
 * 
 * @author farah
 * @since 1'st May 2015
 */
public class UserUtil {

	/**
	 * Accepts details of user and create user in DB.
	 * Return boolean result as user is created or not.
	 * Method calle is {@link servlet.Registration} 
	 * 
	 * @param first_name String user's first name
	 * @param last_name String user's last name
	 * @param email String user's email
	 * @param password String user's password
	 * @return boolean value true/false as user created or not
	 */
	public static boolean createUser(String first_name, String last_name,
			String email, String password) {
		
		// Set default value to result
		boolean result = false;
		try {
			System.out.println(first_name + "..." + last_name + "..." + email
					+ " .... " + password);

			// loading drivers for mysql
			Class.forName("com.mysql.jdbc.Driver");

			// creating connection with the database
			Connection con = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/MRoomPlannerDB", "root",
					"pramati123");

			// Create statement
			Statement st = con.createStatement();

			// Execute query to create user in DB with values
			int i = st
					.executeUpdate("insert into User(`email`,`password`,`first_name`,`last_name`,`contact_numbers`,`role`) values ('"
							+ email
							+ "','"
							+ password
							+ "','"
							+ first_name
							+ "','" + last_name + "','null','3')");

			// If number of affected rows are more than 0 means user is created, set result true
			if (i > 0)
				result = true;

			System.out.println(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		// Return result to calle method
		return result;
	}

}
