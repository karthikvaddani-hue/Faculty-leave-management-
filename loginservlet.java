package auth;
import db.DBConnection;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;

public class LoginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        String id = req.getParameter("id");
        String password = req.getParameter("password");

        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps =
                con.prepareStatement("SELECT role FROM users WHERE id=? AND password=?");
            ps.setString(1, id);
            ps.setString(2, password);

            ResultSet rs = ps.executeQuery();

            if (rs.next()) {
                String role = rs.getString("role");
                HttpSession session = req.getSession();
                session.setAttribute("id", id);

                if (role.equals("FACULTY"))
                    res.sendRedirect("faculty-dashboard.html");
                else if (role.equals("HOD"))
                    res.sendRedirect("hod-dashboard.html");
                else
                    res.sendRedirect("admin-dashboard.html");
            } else {
                res.getWriter().println("Invalid Credentials");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
