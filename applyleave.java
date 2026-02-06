package faculty;
import db.DBConnection;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;

public class ApplyLeaveServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        String facultyId = req.getParameter("facultyId");
        String type = req.getParameter("leaveType");
        String from = req.getParameter("fromDate");
        String to = req.getParameter("toDate");
        String reason = req.getParameter("reason");

        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(
                "INSERT INTO leaves(faculty_id,leave_type,from_date,to_date,reason,status) VALUES(?,?,?,?,?,?)"
            );
            ps.setString(1, facultyId);
            ps.setString(2, type);
            ps.setString(3, from);
            ps.setString(4, to);
            ps.setString(5, reason);
            ps.setString(6, "PENDING");

            ps.executeUpdate();
            res.sendRedirect("leave-history.html");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
