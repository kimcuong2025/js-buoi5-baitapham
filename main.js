// TÍNH TIỀN ĐIỆN 

const electricPrice_1 = 500;
const electricPrice_2 = 650;
const electricPrice_3 = 850;
const electricPrice_4 = 1100;
const electricPrice_5 = 1300;

function calcElectric(electricKw) {

    let calcElectricPrice_1 = 0;
    let calcElectricPrice_2 = 0;
    let calcElectricPrice_3 = 0;
    let calcElectricPrice_4 = 0;
    let calcElectricPrice_5 = 0;
    let electricPrice = 0

    if (0 < electricKw && electricKw <= 50) {
        calcElectricPrice_1 = electricKw * electricPrice_1;
    } else if (51 <= electricKw && electricKw <= 100) {
        calcElectricPrice_1 = 50 * electricPrice_1;
        calcElectricPrice_2 = (electricKw - 50) * electricPrice_2;
    } else if (101 <= electricKw && electricKw <= 200) {
        calcElectricPrice_1 = 50 * electricPrice_1;
        calcElectricPrice_2 = 50 * electricPrice_2;
        calcElectricPrice_3 = (electricKw - 100) * electricPrice_3;
    } else if (201 <= electricKw && electricKw <= 350) {
        calcElectricPrice_1 = 50 * electricPrice_1;
        calcElectricPrice_2 = 50 * electricPrice_2;
        calcElectricPrice_3 = 100 * electricPrice_3;
        calcElectricPrice_4 = (electricKw - 200) * electricPrice_4;
    } else if (electricKw > 350) {
        calcElectricPrice_1 = 50 * electricPrice_1;
        calcElectricPrice_2 = 50 * electricPrice_2;
        calcElectricPrice_3 = 100 * electricPrice_3;
        calcElectricPrice_4 = 150 * electricPrice_4;
        calcElectricPrice_5 = (electricKw - 350) * electricPrice_5;
    } else {
        alert("Nhập số kW lớn hơn 0");
    }

    electricPrice = calcElectricPrice_1 + calcElectricPrice_2 + calcElectricPrice_3 + calcElectricPrice_4 + calcElectricPrice_5

    return electricPrice;
}

const bntElectric = document.getElementById("bntElectric");
bntElectric.onclick = () => {
    const electricKwInput = Number(document.getElementById("electricKw").value);
    const customerNameElectric = document.getElementById("customerNameElectric").value; 
    
    let result = calcElectric(electricKwInput);

    const electricResult = document.getElementById("electricResult");
    electricResult.classList.remove("hidden");
    electricResult.innerHTML = "Khách hàng " + customerNameElectric + " có số tiền điện là: " + result + " VND";
}

// TÍNH TIỀN THUẾ

// tính thu nhập chịu thuế
function calcTaxSalary (salary, depentdents) {
   let taxSalary = salary - 4e6 - depentdents * 1.6e6;
   return taxSalary;
}

// chọn mức thuế
function taxType (taxSalary) {
    let taxRate = 0;

    if (taxSalary <= 60e6) {
        taxRate = 0.05;
    } else if (taxSalary <= 120e6) {
        taxRate = 0.10;
    } else if (taxSalary <= 210e6) {
        taxRate = 0.15;
    } else if (taxSalary <= 384e6) {
        taxRate = 0.20;
    } else if (taxSalary <= 624e6) {
        taxRate = 0.25;
    } else if (taxSalary <= 960e6) {
        taxRate = 0.30;
    } else {
        taxRate = 0.35;
    }

    return taxRate;
}

// tính tiền thuế
function calcTax (taxSalary, taxRate) {
    let tax = taxSalary * taxRate;
    return tax;
}

// Hiển thị currency
const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0
  }).format(value);
};

// DOM tới button gọi hàm
const bntTax = document.getElementById("btnTax");
bntTax.onclick = () => {
    const customerNameTax = document.getElementById("customerNameTax").value;
    const salaryInput = Number(document.getElementById("salary").value);
    const dependentsTaxInput = Number(document.getElementById("dependentsTax").value);

    let taxSalary = calcTaxSalary(salaryInput, dependentsTaxInput);

    let taxRate = taxType(taxSalary);

    let tax = calcTax(taxSalary, taxRate);

    const taxResult = document.getElementById("taxResult")
    taxResult.classList.remove("hidden");
    taxResult.innerHTML = "Tiền thuế thu nhập cá nhân của khách hàng " + customerNameTax + " là " + formatCurrency(tax);
}