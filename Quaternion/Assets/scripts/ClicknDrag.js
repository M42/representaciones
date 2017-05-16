#pragma strict

var ray;
var selectionColor : Color;
private var gameobject : GameObject;
private var lastColor : Color;
private var mouseScreenPoint : Vector3;
private var offset : Vector3;


function Start(){
    Cursor.visible = true;
}

function Update(){
    ray = Camera.main.ScreenPointToRay(Input.mousePosition);
    var rayHit : RaycastHit;

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
    } else if(Input.GetMouseButton(0)){
        var new_mouseScreenPoint = Input.mousePosition;
        var rotate_angle = new_mouseScreenPoint - mouseScreenPoint;
        Debug.Log(rotate_angle.y);

        if(gameobject.name == "X"){
            Debug.Log(gameobject.transform.rotation);
            gameobject.transform.rotation = Quaternion.Euler(rotate_angle.y,0,90);
        } 
        else if(gameobject.name == "Y"){
            Debug.Log(gameobject.transform.rotation);
            gameobject.transform.rotation = Quaternion.Euler(0,rotate_angle.y,0);
        } 
        else if(gameobject.name == "Z"){
            Debug.Log(gameobject.transform.rotation);
            gameobject.transform.rotation = Quaternion.Euler(90,0,rotate_angle.y);

        }
    }
    else if(Input.GetMouseButtonUp(0)) {
        Cursor.visible = true;
        gameobject.GetComponent.<Renderer>().material.color = lastColor;
        gameobject = null;
    }
}