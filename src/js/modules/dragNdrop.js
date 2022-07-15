const dragNDrop = () => {
  const fill = document.querySelector(".fill");
  const empties = document.querySelectorAll(".empty");

  fill.addEventListener('dragstart',dragStart);

  fill.addEventListener('dragend',dragEnd);

  for(const empty of empties){
    empty.addEventListener('dragover',dragOver);
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop',dragDrop);
  }

  function dragStart() {
    console.log(" drag start");
    this.classList.add('hold');
    setTimeout(()=>{
        this.className = '';
    },0);
   
  }
  function dragEnd() {
    console.log(" drag end");
    this.classList.add('fill');
  }
  function dragOver(e) {
    console.log(" drag over");
    e.preventDefault();
  }
  function dragEnter(e) {
    console.log(" drag enter");
    e.preventDefault();
    this.classList.add('hovered');
  }
  function dragLeave() {
    console.log(" drag leave");
    this.classList.remove('hovered');
  }
  function dragDrop() {
    console.log(" drag drop");
    this.classList.add('empty');
    this.append(fill);
  }
};

export default dragNDrop;
