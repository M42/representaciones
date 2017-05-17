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

function Start(){
    Cursor.visible = true;
}

function Update(){
    ray = Camera.main.ScreenPointToRay(Input.mousePosition);

    if(Input.GetMouseButtonDown(0)){
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

        xRotor.transform.rotation = xRotation;
        yRotor.transform.rotation = yRotation;
        zRotor.transform.rotation = zRotation;
    } else if(Input.GetMouseButton(0)){
        var new_mouseScreenPoint = Input.mousePosition;
        var rotate_angle = new_mouseScreenPoint - mouseScreenPoint;
        var foo = zRotor.transform.rotation.z;
        //Debug.Log(rotate_angle.y);

        if(gameobject.name == xRotor.name){
            Debug.Log("X: "+xRotor.transform.rotation);
            xRotor.transform.rotation = xRotation = Quaternion.Euler(rotate_angle.y,0,90);
        } 
        else if(gameobject.name == yRotor.name){
            Debug.Log("Y: "+yRotor.transform.rotation);
            yRotor.transform.rotation = yRotation = Quaternion.Euler(0,rotate_angle.y,0);
        } 
        else if(gameobject.name == zRotor.name){
        	Debug.Log(foo);
            Debug.Log("Z: "+zRotor.transform.rotation);
            zRotor.transform.rotation = zRotation = Quaternion.Euler(90,0,0)*Quaternion.Euler(0,rotate_angle.y,0);

        }
    }
    else if(Input.GetMouseButtonUp(0)) {
        Cursor.visible = true;
        gameobject.GetComponent.<Renderer>().material.color = lastColor;
        gameobject = null;
    }
}