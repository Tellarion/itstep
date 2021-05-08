// ex 1

function f_ex_1_pow(a, b) {
    // [0] = number
    // [1] = power
    return Math.pow(a, b)
}

console.log(f_ex_1_pow(5,3))

// ex 2

function f_ex_2_nod(x, y) {
	if (y > x) return f_ex_2_nod(y, x)
	if (!y) return x
	return f_ex_2_nod(y, x % y)
}

console.log(f_ex_2_nod(10,25))

// ex 3

function f_ex_3_mn(arr) {
    return Math.max(...arr)
}

console.log(f_ex_3_mn([1,2,3,4,5,6,100,200,5,10,45,50]))

// ex 4

function f_ex_4_ss(a) {
    return (!a % 2) ? 'простое' : 'непростое'
}

console.log(f_ex_4_ss(10))

// ex 5

function f_ex_5_s(num)
{
    let b = 2
    let ans = "\n"
    while (num > b){
        while(num%b==0){
            num/=b
            ans += b + '\n'
        }
        b++;
        if(num==b){
            ans += b + '\n'
        }
    }
    return ans;
}

console.log(f_ex_5_s(10))

// ex 6

function f_ex_6(n) {
    if (n==1||n==2) return 1
    else return f_ex_6(n-2)+f_ex_6(n-1)
}

console.log(f_ex_6(10))