from rest_framework import serializers
from .models import *


class PredictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prediction
        fields = ['nitrogen', 'phosphorus', 'potassium', 'temperature', 'humidity',
                  'ph', 'rainfall']
