package servlet;


import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import authentication.Validate;

/**
 * Servlet implementation class <code>Login</code>
 * 
 * @author farah
 * @since 1'st May 2015
 */
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	/**
	 * doPost method of servlet {@link Login}. 
	 * Accepts login credential of user and on result will allow to login or not.
	 * 
	 * @param request
	 * @param response 
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        // Get object of writer
        PrintWriter out = response.getWriter();
        
        // Get credentials from request
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        
        // Get session 
        HttpSession session=request.getSession();  
        
        // Validate user
        if(Validate.checkUser(email, password))
        {
        	// If user is valid user then set session values
        	session.setAttribute("userid", email);
        	
        	// Redirect user to home page
        	response.sendRedirect("home");
        }
        else
        {
           // User is not valid user. Show error message.
           out.println("<font color=red>Username or Password incorrect</font>");
           
           // Forward user to login page again.
           RequestDispatcher rs = request.getRequestDispatcher("index.html");
           rs.include(request, response);
        }
    }  

}
