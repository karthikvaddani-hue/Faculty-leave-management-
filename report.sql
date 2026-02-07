SELECT faculty.name, leaves.leave_type, leaves.from_date,
leaves.to_date, leaves.status
FROM leaves
JOIN faculty ON leaves.fid = faculty.fid;
