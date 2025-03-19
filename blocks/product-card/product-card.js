export default function product(block) {
  console.log(block);
  Array.from(block.children).forEach((col) => {
    col.classList.add('my-col');
  });
}
