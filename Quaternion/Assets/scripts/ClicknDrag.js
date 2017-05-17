#pragma strict

var ray;
var selectionColor : Color;
private var gameobject : GameObject;
private var lastColor : Color;
private var mouseScreenPoint : Vector3;
private var rayHit : RaycastHit;
//private var offset : Vector3;
var xRotor : GameObject;
var yRotor : GameObject;
var zRotor : GameObject;

var xRotation : Quaternion;
var yRotation : Quaternion;
var zRotation : Quaternion;

private var rotx : float;
private var roty : float;
private var rotz : float;

var speed : float = 2;

function Start(){
  Cursor.visible = true;
  xRotation = xRotor.transform.rotation;
  yRotation = yRotor.transform.rotation;
  zRotation = zRotor.transform.rotation;
}

function Update(){
  ray = Camera.main.ScreenPointToRay(Input.mousePosition);

  if(Input.GetMouseButtonDown(0) || Input.GetMouseButtonDown(1)){
    Cursor.visible = false;
    if(Physics.Raycast(ray, rayHit)){
      gameobject = rayHit.collider.gameObject;
      lastColor = gameobject.GetComponent.<Renderer>().material.color;
      if(gameobject != null){
        Debug.Log(gameobject.name);
        gameobject.GetComponent.<Renderer>().material.color = selectionColor;
        mouseScreenPoint = Input.mousePosition;
      }
    }
    rotx = roty = rotz = 0;
  } else if(Input.GetMouseButton(0) || Input.GetMouseButton(1)){
    var new_mouseScreenPoint = Input.mousePosition;
    var rotate_angle = new_mouseScreenPoint - mouseScreenPoint;
    var foo = zRotor.transform.rotation.z;
    var sign = Input.GetMouseButton(1) ? -1 : 1;
    //Debug.Log(rotate_angle.y);

    if (gameobject != null) {
      if(gameobject.name == xRotor.name){
        //Debug.Log("X: "+xRotor.transform.rotation);
        rotx += sign * speed;
        xRotor.transform.rotation = xRotation * Quaternion.Euler(0,rotx,0);
      } 
      else if(gameobject.name == yRotor.name){
        //Debug.Log("Y: "+yRotor.transform.rotation);
        roty += sign * speed;
        yRotor.transform.rotation = yRotation * Quaternion.Euler(0,roty,0);
      } 
      else if(gameobject.name == zRotor.name){
        //Debug.Log(foo);
        //Debug.Log("Z: "+zRotor.transform.rotation);
        rotz += sign * speed;
        zRotor.transform.rotation = zRotation * Quaternion.Euler(0,rotz,0);

      }
      else {
        Debug.Log(gameobject.transform.rotation);
      }
    }
  }
  else if(Input.GetMouseButtonUp(0) || Input.GetMouseButtonUp(1)) {
    Cursor.visible = true;
    gameobject.GetComponent.<Renderer>().material.color = lastColor;
    gameobject = null;

    zRotation = zRotor.transform.rotation;
    xRotation = xRotor.transform.rotation;
    yRotation = yRotor.transform.rotation;
  }
}
