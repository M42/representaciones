#pragma strict

var ray;
private var rayHit : RaycastHit;

var t : float;
var capsule : GameObject;
var sphere : GameObject;
var clicked : GameObject;

private var initial : Quaternion;
private var end : Quaternion;

private var enable_anim : boolean;

function Start () {
  t = 0;
  enable_anim = false;
  end = new Quaternion(-0.5, 0.5, 0.5, 0.5);
}

function Update () {
  ray = Camera.main.ScreenPointToRay(Input.mousePosition);

  // detect a click on the sphere
  if (Input.GetMouseButtonUp(0)) {
    if (Physics.Raycast(ray, rayHit)) {
      clicked = rayHit.collider.gameObject;

      if (clicked == sphere) {
        initial = capsule.transform.rotation;
        enable_anim = true;
      }
    }
  }
  
  if (enable_anim) {
    // update animation
    t += 0.025;
    capsule.transform.rotation = Quaternion.Slerp(initial, end, t);

    // stop animation when finished
    if (t >= 1) {
      enable_anim = false;
      t = 0;
    }
  }
}
