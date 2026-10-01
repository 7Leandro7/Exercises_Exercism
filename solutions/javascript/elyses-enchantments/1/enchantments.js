// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
  return cards[position];
}

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
export function setItem(cards, position, replacementCard) {
  cards.splice(position, 1, replacementCard);
  return cards;
}

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
  cards.push(newCard);
  return cards;
}

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
  cards.splice(position, 1);
  return cards;
}

/**
* Remova a carta do final da sequência de cartas

* @param {number[]} cartas
*
* @returns {number[]} os cards sem o card removido
*/
export  function  removeItemFromTop ( cards ) {
  cards.pop();
  return cards;
}

/**
* Insira um novo cartão no início da matriz de cartões
*
* @param {number[]} cartas
* @param {número} novoCartão
*
* @returns {number[]} os cartões, incluindo o novo cartão
*/
export   function   insertItemAtBottom ( cards , newCard ) {
  cards.unshift(newCard);
  return cards;
}

/**
*Remoção do cartão do início do baralho.
*
* @param {number[]} cartas
*
* @returns {número[]} os cartões sem o cartão removido
*/
export   function   removeItemAtBottom ( cards ) {
  cards.shift()
  return cards;
}

/**
* Compare o número de cartas com o tamanho da pilha fornecida.
*
* @param {number[]} cartas
* @param {número} tamanho da pilha
*
* @returns {boolean} verdadeiro se houver exatamente stackSize (Número de cartas igual a stackSize), falso caso contrário
*/
export    function    checkSizeOfStack ( cards , stackSize ) {
  return cards.length === stackSize;
}
