#pragma strict

var t : float;
var capsule : GameObject;
var sphere : GameObject;

private var initial : Quaternion;
private var end : Quaternion;

function Start () {
  t = 0;
  initial = capsule.transform.rotation;
  end = new Quaternion(-0.5, 0.5, 0.5, 0.5);
}

function Update () {
  if (Input.GetKey ("up")){
    t += 0.1;
    t = t > 1 ? 1 : t;
    Debug.Log(t);
    capsule.transform.rotation = Quaternion.Slerp(initial, end, t);
  }
}
