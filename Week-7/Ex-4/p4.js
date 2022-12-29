// Given an expression string x.
// Examine whether the pairs and the orders of “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
//For example, the function should return 'true' for exp= “[()]{}{()()}” and 'false' for exp = “[(])”.


function areBracketsBalanced(expr)
{	
	// Using ArrayDequeue is faster
	// than using Stack class
	let stack = [];

	// Traversing the Expression
	for(let i = 0; i < expr.length; i++)
	{
		let x = expr[i];

		if (x == '(' || x == '[' || x == '{')
		{
			// Push the element in the stack
			stack.push(x);
			continue;
		}
		// If current character is not opening
		// bracket, then it must be closing.
		// So stack cannot be empty at this point.
		if (stack.length == 0)
			return false;
			
		let check;
		switch (x){
		case ')':
			check = stack.pop();
			if (check == '{' || check == '[')
				return false;
			break;

		case '}':
			check = stack.pop();
			if (check == '(' || check == '[')
				return false;
			break;

		case ']':
			check = stack.pop();
			if (check == '(' || check == '{')
				return false;
			break;
		}
	}
	// Check Empty Stack
	return (stack.length == 0);
}

// Driver code
let expr = "([{}]){}";
if (areBracketsBalanced(expr)){
    console.log("Balanced ");
}else{
    console.log(" NOT Balanced ");
}
