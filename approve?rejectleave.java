package admin;
import db.DBConnection;
import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.sql.*;

public class ApproveLeaveServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {

        int leaveId = Integer.parseInt(req.getParameter("leaveId"));
        String status = req.getParameter("status");

        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps =
                con.prepareStatement("UPDATE leaves SET status=? WHERE leave_id=?");
            ps.setString(1, status);
            ps.setInt(2, leaveId);

            ps.executeUpdate();
            res.sendRedirect("approve-leave.html");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
