SELECT unique_id, name
FROM Employees emp
LEFT JOIN EmployeeUNI empU ON emp.id = empU.id;