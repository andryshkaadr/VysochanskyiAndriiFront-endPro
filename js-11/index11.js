const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 3);

function removeElement(array, item) {
  let isDeleted = false;
  console.log(`Your array: ${array}`);
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--;
      isDeleted = true;
    } else {
      continue;
    }
  }
  if (isDeleted) {
    console.log(`New array: ${array}`);
  } else {
    console.log("No items to delete");
  }
}
