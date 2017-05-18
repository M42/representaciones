#pragma strict

var capsule : GameObject;
public var capsuleQuaternion : UnityEngine.UI.Text;


function Start () {
    setCapsuleText();
}

function Update () {
    setCapsuleText();
}

function setCapsuleText(){
    capsuleQuaternion.text = "Cuaternio de la cápsula: (" + capsule.transform.rotation.x.ToString() + "," + capsule.transform.rotation.y.ToString() + "," + capsule.transform.rotation.z.ToString() + "," + capsule.transform.rotation.w.ToString() + ")";
}