console.log("tut15")

let cont = document.querySelector('.no')
cont = document.querySelector('.container')
console.log(cont.childNodes)   //will show newline as an text and also shows comment in response
console.log(cont.children)  //only elements will be shown does not include newline
// let nodename = cont.childNodes[0].nodeName;
// let nodename = cont.children[0].nodeName;
// console.log(nodename);
// let nodetype = cont.children[0].nodeType;
// console.log(nodetype);

/*node types

Constant	                    Value	Description
Node.ELEMENT_NODE	                1	An Element node like <p> or <div>.
Node.ATTRIBUTE_NODE	                2	An Attribute of an Element.
Node.TEXT_NODE	                    3	The actual Text inside an Element or Attr.
Node.CDATA_SECTION_NODE	            4	A CDATASection, such as <!CDATA[[ … ]]>.
Node.PROCESSING_INSTRUCTION_NODE    7	A ProcessingInstruction of an XML document, such as <?xml-stylesheet … ?>.
Node.COMMENT_NODE	                8	A Comment node, such as <!-- … -->.
Node.DOCUMENT_NODE	                9	A Document node.
Node.DOCUMENT_TYPE_NODE	            10	A DocumentType node, such as <!DOCTYPE html>.
Node.DOCUMENT_FRAGMENT_NODE	        11	A DocumentFragment node.
*/

let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);
// console.log(container.firstChild); //gives 1st child of childnode
// console.log(container.firstElementChild); //gives 1st  element

// console.log(container.lastChild); //gives last child of childnode
// console.log(container.lastElementChild); //gives last  element
// console.log(container.childElementCount); //count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);