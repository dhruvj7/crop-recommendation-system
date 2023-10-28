from django.shortcuts import render
from rest_framework.views import APIView
from . serializers import *
from django.views.decorators.csrf import csrf_exempt
import os
import joblib
import numpy as np
from rest_framework.response import Response


model = joblib.load(os.path.join(os.getcwd(),'predictions\models\Crop-Recommender.pkl'))

# Create your views here.
class PredictionView(APIView):
    serializer_class = PredictionSerializer
    @csrf_exempt
    def post(self, request):
        serializer = PredictionSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid(raise_exception=True):
            validated_data = serializer.validated_data
            input_data = [validated_data['nitrogen'], validated_data['phosphorus'],
                          validated_data['potassium'], validated_data['temperature'],
                          validated_data['humidity'], validated_data['ph'], validated_data['rainfall']]
            final_features = [np.array(input_data)]
            prediction = model.predict(final_features)
            predicted_crop = prediction[0]
            print(prediction)
            return Response({'predicted_crop': predicted_crop}, status=201)
        return Response(serializer.errors, status=400)