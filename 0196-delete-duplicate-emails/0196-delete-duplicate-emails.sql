-- SQL solution to delete duplicate emails, keeping only one unique email with the smallest id.
-- We use a multi-table DELETE statement.
-- p1 represents the rows we intend to delete.
-- p2 represents the rows we want to keep (those with the smallest id for each email).
DELETE p1
FROM Person p1, Person p2
WHERE
    -- Match rows with the same email address.
    p1.email = p2.email AND
    -- Ensure we only delete the row with a larger id, thus keeping the one with the smallest id.
    p1.id > p2.id;
