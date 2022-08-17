document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const totalWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = totalWithdrawElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = newBalanceTotal;





    totalWithdrawElement.innerText = currentWithdrawTotal;

    withdrawField.value = '';
})