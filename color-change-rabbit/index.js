const inputs = document.querySelectorAll('.controls input')
const leftEar = document.getElementById('left-ear')
const rightEar = document.getElementById('right-ear')
const leftEye = document.getElementById('left-eye')
const rightEye = document.getElementById('right-eye')
const nose = document.querySelector('.nose')

const updateColor = (elements, color) => {
  elements.map((element) => {
    element.style.backgroundColor = color
  })
}

function handleUpdate(e) {
  const input = e.target
  const colorCode = input.value
  const attribute = input.getAttribute('name')

  switch (attribute) {
    case 'base':
      return updateColor([leftEye, rightEye], colorCode)
    case 'base2':
      return updateColor([leftEar, rightEar], colorCode)
    case 'base3':
      return updateColor([nose], colorCode)
    default:
      return
  }

  //Done with ifs:
  // if(attribute === "base") {
  //   updateColor([leftEye, rightEye], colorCode)
  // }

  // if(attribute === "base2") {
  //   updateColor([leftEar, rightEar], colorCode)
  // }

  // if(attribute === "base3") {
  //   updateColor([nose], colorCode)
  // }
}

inputs.forEach((input) => input.addEventListener('change', handleUpdate))
