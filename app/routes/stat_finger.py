from flask_restx import fields, Namespace
from app.utils import get_logger, auth
from app import utils
from bson import ObjectId
from . import base_query_fields, ARLResource, get_arl_parser

ns = Namespace('stat_finger', description="指纹统计信息")

logger = get_logger()

base_search_fields = {
    'name': fields.String(required=False, description="指纹名称"),  # 字段名没搞好
    "task_id": fields.String(description="任务 ID"),
    "cnt": fields.Integer(description="数目"),
}

base_search_fields.update(base_query_fields)


@ns.route('/')
class ARLStatFingerprint(ARLResource):
    parser = get_arl_parser(base_search_fields, location='args')

    @auth
    @ns.expect(parser)
    def get(self):
        """
        指纹统计信息查询
        """
        args = self.parser.parse_args()
        data = self.build_data(args=args, collection='stat_finger')
        result = utils.conn_db('site').find({'task_id': args["task_id"]})
        sites = self.build_return_items(result)
        for i, item in enumerate(data["items"]):
            data["items"][i]['targets'] = []
            for site in sites:
                for finger in site["finger"]:
                    if finger["name"] == item["name"]:
                        data["items"][i]['targets'].append(site["site"])
                        continue
        return data