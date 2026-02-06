package faculty;
import db.DBConnection;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;

public class LeaveHistoryServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        String facultyId = (String) req.getSession().getAttribute("id");

        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps =
                con.prepareStatement("SELECT * FROM leaves WHERE faculty_id=?");
            ps.setString(1, facultyId);

            ResultSet rs = ps.executeQuery();
            PrintWriter out = res.getWriter();

            out.println("<h2>Leave History</h2>");
            while (rs.next()) {
                out.println(rs.getString("leave_type") + " - " +
                            rs.getString("status") + "<br>");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
