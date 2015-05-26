package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import user.UserUtil;

/**
 * Servlet implementation class Registration
 * 
 * @author farah
 * @since 1'st May 2015
 */
public class Registration extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	/**
	 * doPost method of servlet {@link Registration}. 
	 * Accepts details of user and add user as normal user in DB.
	 * Forward user to welcome page from {@link Welcome}.
	 * 
	 * @param request
	 * @param response 
	 * 
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        // Get user details from request.
        String first_name = request.getParameter("first_name");
        String last_name = request.getParameter("last_name");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        
        // Send user details to createUser method of UserUtil to create user.
        if(UserUtil.createUser(first_name,last_name,email, password))
        {
        	// After user creation forward user to welcome page.
            RequestDispatcher rs = request.getRequestDispatcher("welcome");
            rs.forward(request, response);
        }
        else
        {
           // On failure forward user to login page.
           RequestDispatcher rs = request.getRequestDispatcher("index.html");
           rs.include(request, response);
        }
    }  

}
