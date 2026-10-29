const products = [
  { id: 1, name: "iPhone 15", price: 800, discount: 10, stock: 5 },
  { id: 2, name: "Samsung S24", price: 950, discount: 15, stock: 12 },
  { id: 3, name: "Redmi Note 13", price: 250, discount: 5, stock: 0 },
  { id: 4, name: "MacBook Air", price: 1200, discount: 20, stock: 3 },
  { id: 5, name: "iPad Pro", price: 1000, discount: 10, stock: 8 },
  { id: 6, name: "AirPods Pro", price: 250, discount: 0, stock: 20 },
];

const students = [
  { id: 1, name: "Ali", age: 18, score: 85 },
  { id: 2, name: "Vali", age: 17, score: 52 },
  { id: 3, name: "Madina", age: 19, score: 95 },
  { id: 4, name: "Sardor", age: 18, score: 67 },
  { id: 5, name: "Aziza", age: 17, score: 43 },
  { id: 6, name: "Jasur", age: 20, score: 76 },
];

const expensiveProducts = products.filter(product => product.price > 800);
console.log(expensiveProducts);

students.forEach(student => {
  console.log(`${student.name} — ${student.score} ball`);
});

const discountedProducts = products.map(product => {
  const finalPrice = product.price - (product.price * product.discount / 100);
  return {
    name: product.name,
    price: product.price,
    discount: product.discount,
    finalPrice: finalPrice
  };
});
console.log(discountedProducts);

const student4 = students.find(student => student.id === 4);
if (student4) {
  console.log(`Ismi: ${student4.name}, Balli: ${student4.score}`);
} else {
  console.log("Talaba topilmadi");
}

const hasOutOfStock = products.some(product => product.stock === 0);
if (hasOutOfStock) {
  console.log("Omborda tugagan mahsulot bor");
} else {
  console.log("Barcha mahsulotlar mavjud");
}

const allPassed = students.every(student => student.score >= 60);
if (allPassed) {
  console.log("Barcha talabalar imtihondan o‘tdi");
} else {
  console.log("Guruhda imtihondan o‘ta olmagan talabalar bor");
}

const sortedProducts = [...products].sort((a, b) => a.price - b.price);
sortedProducts.forEach(product => {
  console.log(`${product.name}: $${product.price}`);
});

const topStudents = students
  .filter(student => student.score >= 70)
  .sort((a, b) => b.score - a.score)
  .map(student => ({ name: student.name, score: student.score }));
console.log(topStudents);

const filteredAndDiscounted = products
  .filter(product => product.discount >= 10)
  .map(product => ({
    ...product,
    finalPrice: product.price - (product.price * product.discount / 100)
  }));

const hasExpensiveAfterDiscount = filteredAndDiscounted.some(p => p.finalPrice > 800);
console.log(filteredAndDiscounted);
console.log(hasExpensiveAfterDiscount);

const mappedPassed = students
  .filter(student => student.score >= 60)
  .sort((a, b) => b.score - a.score)
  .map(student => ({ name: student.name, score: student.score }));
console.log(mappedPassed);

const topFirstStudent = students.find(student => student.score > 90);
console.log(topFirstStudent);

const hasTopStudent = students.some(student => student.score > 90);
console.log(hasTopStudent);

const allAbove40 = students.every(student => student.score >= 40);
console.log(allAbove40);

students.forEach(student => {
  console.log(`${student.name}: ${student.score} ball`);
});