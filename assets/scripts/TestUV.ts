import { _decorator, Component, Node, Vec3, SkinnedMeshRenderer, Material, Vec4 } from 'cc';
const { ccclass, property } = _decorator;

const TMP_VEC3 = new Vec3();
const TMP_VEC4 = new Vec4();

@ccclass('TestUV')
export class TestUV extends Component {
    @property(Node)
    private nodeBody: Node;

    @property(SkinnedMeshRenderer)
    private bodyMeshRenderer: SkinnedMeshRenderer;

    private _bodyMaterial: Material;

    onLoad() {
        this._bodyMaterial = this.bodyMeshRenderer.getMaterial(0);
    }

    update(dt: number) {
        TMP_VEC3.y += dt * 10;
        this.nodeBody.setRotationFromEuler(TMP_VEC3);

        this._changeUV(dt);
    }

    private _changeUV(dt: number) {
        let pass = this._bodyMaterial.passes[0];
        let handle = pass.getHandle('tilingOffset');
        TMP_VEC4.x += dt;
        TMP_VEC4.y += dt;
        pass.setUniform(handle, TMP_VEC4);
    }
}
