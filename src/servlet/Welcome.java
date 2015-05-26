package servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class <code>Welcome</code>
 * 
 * @author farah
 * @since 1'st May 2015
 */
public class Welcome extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	/**
	 * 
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 * @param request
	 * @param response
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		
		// Get object of writer
        PrintWriter out = response.getWriter();
                      
        // Get parameters from request
        String first_name=request.getParameter("first_name");
        String last_name=request.getParameter("last_name");
        
        // Display welcome message
        out.print("Welcome "+first_name+" "+last_name+".");
        out.println("Registration is Successful.");
        out.println("Please Login Here <a href='index.html'>Go to Login</a>");
	}

}
