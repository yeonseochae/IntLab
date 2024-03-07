const containerEl = document.querySelector("#blocks_container");
const createBlocksBtn = document.querySelector("#create_blocks_btn");
const removeBlocksBtn = document.querySelector("#remove_blocks_btn");

const background_colors = [
  "#97E2F0",
  "#8AA6F3",
  "#A3F7E7",
  "#69EBC2",
  "#FCDE8B",
  "#FFD460",
  "#FFAA60",
  "#FF9050"
]
const scale = [
  "0.55",
  "0.6",
  "0.65",
  "0.7",
  "0.75",
  "0.8",
  "0.85",
  "0.95"
]

console.log(containerEl)

function createBlocks() {
  // first, remove the example blocks
  containerEl.innerHTML = "";
  console.log("create blocks");

  for (let i=0; i < scale.length; i++){
    
  let blockEl = `
    <div class="block" style="scale: ${scale[i]};}; background-color: ${background_colors[i]}
    ">
   
    <p>Scale: ${scale[i]}</p>
    </div>
  `;
  containerEl.insertAdjacentHTML('beforeend', blockEl)
}
  
}

function removeBlocks() {
  console.log("remove blocks");
  containerEl.innerHTML = "";
}

createBlocksBtn.addEventListener("click", createBlocks);
removeBlocksBtn.addEventListener("click", removeBlocks);


