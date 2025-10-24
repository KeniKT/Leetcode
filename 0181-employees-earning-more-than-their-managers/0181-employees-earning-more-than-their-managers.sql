-- The solution uses a self-join to compare an employee's salary with their manager's salary.

SELECT
    E.name AS Employee -- Select the employee's name, aliased as 'Employee'
FROM
    Employee AS E      -- E represents the employee
JOIN
    Employee AS M ON E.managerId = M.id -- M represents the manager. Join E to M where the employee's managerId equals the manager's id.
WHERE
    E.salary > M.salary; -- Filter for employees whose salary is strictly greater than their manager's salary.
