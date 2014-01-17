var Painting_Client = function()
{
  this.drawing = false;  // True when the client is changing pixels on the canvas
}

Painting_Client.prototype.is_drawing = function()
{
  return this.drawing;
}

Painting_Client.prototype.set_drawing = function( value )
{
  this.drawing = value;
}